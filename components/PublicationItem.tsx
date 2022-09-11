import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

const PublicationItem = ({publication, index}: Props): JSX.Element => {
    return (
        <div className = "mt-4 mb-8">
            <p className = "text-base text-gray-500">
                [{index}] {publication.author} <b><i>{publication.title}</i></b><br/>
                <a className = "text-sm">{publication.conference}</a>
            </p>
            <p className = "text-gray-500 flex justify-end text-sm bold">
                <ExtLink href={publication.pdf}> [pdf] &nbsp;</ExtLink>
                <ExtLink href={publication.slides}> [slides] &nbsp;</ExtLink>
                <ExtLink href={publication.video}> [video] </ExtLink>
            </p>
            
        </div>

    );
};

export default PublicationItem;
