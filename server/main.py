from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import Base, engine
from .auth import router as auth_router
from .auction import router as auction_router

# Создаем таблицы
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Разрешаем фронту делать запросы
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL фронта
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth")
app.include_router(auction_router, prefix="/auction")
