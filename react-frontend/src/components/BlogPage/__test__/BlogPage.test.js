import React from "react";
import { render, screen } from "@testing-library/react";

import BlogPage from "../BlogPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders blog page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BlogPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("blog-datatable")).toBeInTheDocument();
    expect(screen.getByRole("blog-add-button")).toBeInTheDocument();
});
