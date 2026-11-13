
from functools import lru_cache
import importlib
import os
from pathlib import Path

try:
    _settings_module = importlib.import_module("pydantic_settings")
    BaseSettings = _settings_module.BaseSettings
    SettingsConfigDict = _settings_module.SettingsConfigDict
except ImportError:
    def SettingsConfigDict(**kwargs):
        return kwargs

    class BaseSettings:
        def __init__(self, **values):
            config = getattr(self, "model_config", {})
            env_values = {}
            env_file = config.get("env_file")
            if env_file and Path(env_file).is_file():
                for line in Path(env_file).read_text().splitlines():
                    key, separator, value = line.partition("=")
                    if separator and key.strip() and not key.lstrip().startswith("#"):
                        env_values[key.strip()] = value.strip().strip("\"'")

            for name, value in env_values.items():
                os.environ.setdefault(name, value)

            for name, field_type in self.__class__.__annotations__.items():
                default = getattr(self.__class__, name)
                raw_value = values.get(name, os.getenv(name.upper(), default))
                if field_type is int:
                    raw_value = int(raw_value)
                setattr(self, name, raw_value)

BASE_DIR = Path(__file__).resolve().parents[2]


class Settings(BaseSettings):

    # Application
    app_name: str = "Enterprise IT Support Agentic RAG Copilot"
    app_env: str = "development"

    # API Keys
    google_api_key: str = ""
    tavily_api_key: str = ""
    pinecone_api_key: str = ""

    # Pinecone
    pinecone_index_name: str = "industry-agentic-rag-kb"
    pinecone_namespace: str = "langgraph-agentic-rag"

    # AI Models
    gemini_model: str = "gemini-3.5-flash-lite"
    hf_embedding_model: str = "sentence-transformers/all-MiniLM-L6-v2"

    # Retrieval Settings
    top_k: int = 4
    max_retries: int = 1

    # Admin
    admin_api_key: str = "change-me"

    # Application Paths
    audit_db_path: str = str(BASE_DIR / "data" / "audit.db")
    upload_dir: str = str(BASE_DIR / "uploads")
    sample_kb_dir: str = str(BASE_DIR / "data" / "sample_kb")

    model_config = SettingsConfigDict(
        env_file=str(BASE_DIR / ".env"),
        extra="ignore"
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
