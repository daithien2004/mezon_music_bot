# Mezon Music Bot

Bot nghe nhạc cho Mezon, xây dựng với NestJS và `@n0xgg04/nezon`.

## Setup

1.  **Cài dependencies**:
    ```bash
    npm install
    ```

2.  **Cấu hình môi trường**:
    - Copy `.env.example` thành `.env`
    - Điền `MEZON_TOKEN` và `MEZON_BOT_ID`

3.  **Chạy bot**:
    ```bash
    # Development
    npm run start:dev

    # Production
    npm run build
    npm run start:prod
    ```

## Commands

| Lệnh | Aliases | Mô tả |
|------|---------|-------|
| `ping` | `pong` | Kiểm tra bot còn sống |
| `tarot` | `boidich` | Rút 1 lá bài Tarot ngẫu nhiên (Daily nếu không tham số) |
| `tarot spread` | `tarot 3` | Trải bài 3 lá (Quá khứ - Hiện tại - Tương lai) |
| `thanso <dd/mm/yyyy>` | `numerology` | Xem Thần Số Học (Con số chủ đạo) |
| `tuvi <cung>` | `horoscope` | Xem Tử Vi hàng ngày cho 12 cung hoàng đạo |
| `xinxam` | `gieoque` | Xin xăm Quan Âm (Thơ + Lời giải) |
| `taixiu` | `sicbo` | Chơi Tài Xỉu (3 xúc xắc) |
| `tungxu` | `coinflip` | Tung đồng xu (Sấp/Ngửa) |
| `qr <text>` | `qrcode` | Tạo mã QR từ văn bản/link |

## Cấu trúc

- `src/app.module.ts`: Cấu hình module chính
- `src/handlers/tarot.handler.ts`: Logic bói bài Tarot
- `src/handlers/numerology.handler.ts`: Logic Thần Số Học
- `src/handlers/horoscope.handler.ts`: Logic Tử Vi 12 Cung Hoàng Đạo
- `src/handlers/xinxam.handler.ts`: Logic Xin Xăm
- `src/handlers/game.handler.ts`: Logic Mini Game (Tài Xỉu, Tung Xu)
- `src/handlers/utility.handler.ts`: Logic Tiện ích (QR Code)
