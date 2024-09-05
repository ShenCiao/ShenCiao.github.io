import ExtLink from './ExtLink';
import { ReactElement } from "react";

const PublicationItem = ({title, url, conference}:{title:string, url:string, conference:string}): ReactElement => {
    return (
        <div className = "mt-4 mb-8">
            <p className = "text-base text-gray-500">
                <ExtLink href={url}><b><i>{title}</i></b><br/></ExtLink>
                <a className = "text-sm">{conference}</a>
            </p>
            {/*<p className = "text-gray-500 flex justify-end text-sm bold">*/}
            {/*    {publication.links.map((linkItem: any, idx: any) => (*/}
            {/*        <ExtLink href={url} key={idx}> [{linkItem.name}] &nbsp;</ExtLink>*/}
            {/*    ))}*/}
            {/*</p>*/}
            
        </div>

    );
};

export default PublicationItem;
