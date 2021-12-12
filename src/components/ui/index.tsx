import { Link } from "react-router-dom";
import { TopicContainerProps } from "../../types";

export const TopicContainer = ({ link, title }: TopicContainerProps) => {
    return (<div className="topic-container">
        <Link to={link}>
            <h2 className="topic-title">{title}</h2>
            <h2>&#8594;</h2>
        </Link>
    </div>)
}

export const ContentContainer = (props: any) => {
    const { children, customStyles, customClassName } = props;
    return (<div style={customStyles ? customStyles : {}} className={`content-container ${customClassName}`}>
        {children}
    </div>)
}