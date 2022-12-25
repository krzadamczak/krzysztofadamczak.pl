import React from "react";
import css from "../../styles/Tag.module.css";

const Tag = ({ children }: { children: React.ReactNode }) => {
    return <div className={css.tag}>{children}</div>;
};

export default Tag;
