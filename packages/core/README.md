# Core Domain Business Logic

## Rules
✅ adapters/* can import from application/* and domain/*.
✅ application/* can import from domain/*.
❌ domain/* must not import from application/* or adapters/*.
❌ application/* must not import from adapters/*.