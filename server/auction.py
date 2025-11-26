from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas
from .database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Создать аукцион
@router.post("/create", response_model=schemas.AuctionOut)
def create_auction(auction: schemas.AuctionCreate, db: Session = Depends(get_db)):
    new_auction = models.Auction(item_name=auction.item_name)
    db.add(new_auction)
    db.commit()
    db.refresh(new_auction)
    return new_auction

# Сделать ставку
@router.post("/bid/{auction_id}/{user_id}")
def bid(auction_id: int, user_id: int, db: Session = Depends(get_db)):
    auction = db.query(models.Auction).filter(models.Auction.id == auction_id).first()
    if not auction:
        raise HTTPException(status_code=404, detail="Аукцион не найден")
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Пользователь не найден")
    if auction.winner_id:
        raise HTTPException(status_code=400, detail="Аукцион уже завершен")
    auction.winner_id = user_id
    db.commit()
    return {"message": f"Победитель выбран: {user.email}"}

# Получить аукцион
@router.get("/{auction_id}", response_model=schemas.AuctionOut)
def get_auction(auction_id: int, db: Session = Depends(get_db)):
    auction = db.query(models.Auction).filter(models.Auction.id == auction_id).first()
    if not auction:
        raise HTTPException(status_code=404, detail="Аукцион не найден")
    return auction
