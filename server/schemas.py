from pydantic import BaseModel

# Схема для регистрации
class UserCreate(BaseModel):
    email: str
    password: str
    role: str  # 'business' или 'person'

class UserOut(BaseModel):
    id: int
    email: str
    role: str

    class Config:
        orm_mode = True

# Схема для логина
class UserLogin(BaseModel):
    email: str
    password: str

# Схемы для аукционов
class AuctionCreate(BaseModel):
    item_name: str

class AuctionOut(BaseModel):
    id: int
    item_name: str
    winner_id: int | None

    class Config:
        orm_mode = True
