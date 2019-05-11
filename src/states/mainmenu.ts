import { ReplyKeyboardMarkup } from "node-telegram-bot-api";

export const mainMenu: ReplyKeyboardMarkup = {
    keyboard: [
        [
            { text: "Статус девайсу" },
            { text: "Опитати входи"}
        ],
        [
            { text: "Отримати фото" }
        ],
        [
            { text: "Попрощатися 👋️" }
        ]
    ],
    resize_keyboard: true
}