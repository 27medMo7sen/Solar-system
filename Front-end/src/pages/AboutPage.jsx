import { Fragment, useEffect } from "react";
import About from "../components/About/About";
const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Fragment>
            <About />
        </Fragment>
    );
};
export default AboutPage;

