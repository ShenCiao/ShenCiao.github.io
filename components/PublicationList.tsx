import PublicationItem from './PublicationItem'
// @ts-ignore
import bibData from './data/myPublications.bib'
import {BibtexParser} from "bibtex-js-parser";

const bibJSON = BibtexParser.parseToJSON(bibData);

const PublicationList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Publications</h2>
            <div>
              {bibJSON.map(paper => (
                <PublicationItem title={paper.title} url={paper.url} conference={paper.booktitle}/>
              ))}
            </div>

        </section>
    );
};



export default PublicationList;
