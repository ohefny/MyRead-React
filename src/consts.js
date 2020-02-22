export const BOOK_SHELF_OPTION = {
    NONE: "none",
    READ: "read",
    CURRENTLY_READING: "currentlyReading",
    WANT_TO_READ: "wantToRead"
};
export const MY_SHELVES = [
    {title: "Currently Reading", id: BOOK_SHELF_OPTION.CURRENTLY_READING},
    {title: "Want To Read", id: BOOK_SHELF_OPTION.WANT_TO_READ},
    {title: "Read", id: BOOK_SHELF_OPTION.READ}
];
export const QUERY_REGEX = /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/