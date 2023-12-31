import React from "react";
import {
  NotFoundContainer,
} from "./NotFoundStyles";

export function NotFound() {
  return (
    <NotFoundContainer>
        <h1>Not Found</h1>
        <p>The requested page could not be found.</p>
    </NotFoundContainer>
  );
}
