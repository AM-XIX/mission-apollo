import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GET_BOOKS } from '../queries/books';
import { useQuery } from '@apollo/client';
export default function Book() {
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (error)
        return _jsx("p", { children: "Error :(" });
    return data.books.map((book) => (_jsxs("div", { children: [_jsx("p", { children: book.title }), _jsx("p", { children: book.author }), _jsx("p", { children: book.rate })] }, book.id)));
}
