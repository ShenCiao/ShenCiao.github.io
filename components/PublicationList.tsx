import PublicationItem from './PublicationItem'
import {BibtexParser} from "bibtex-js-parser";

const bibData = `@inproceedings{A,
author = {Ciao, Shen and Wei, Li-Yi},
title = {Ciallo: The next-generation vector paint program},
year = {2023},
isbn = {9798400701436},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3587421.3595418},
doi = {10.1145/3587421.3595418},
abstract = {We introduce Ciallo, an open-source next-generation vector paint program, which supports GPU-rendered stylized strokes and real-time bucket (region) fill. All strokes and fill regions are represented in editable polyline vector format instead of in raster format. Our novel stroke rendering methods are simple to implement and can potentially replicate the vast majority of brushes in other paint programs. The novel bucket fill can automate parts of the Japanese anime coloring process. In summary, Ciallo presents a new technical paradigm for the fundamentals of 2D digital art production.},
booktitle = {ACM SIGGRAPH 2023 Talks},
articleno = {67},
numpages = {2},
keywords = {vector graphics. coloring, stylized stroke, graphics processing unit (GPU), arrangement, Digital painting},
location = {Los Angeles, CA, USA},
series = {SIGGRAPH '23}
}

@inproceedings{B,
author = {Ciao, Shen and Guan, Zhongyue and Liu, Qianxi and Wei, Li-Yi and Wang, Zeyu},
title = {Ciallo: GPU-Accelerated Rendering of Vector Brush Strokes},
year = {2024},
isbn = {9798400705250},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3641519.3657418},
doi = {10.1145/3641519.3657418},
abstract = {This paper introduces novel GPU-based rendering techniques for digital painting and animation to bridge the gap between raster and vector stroke representations. We propose efficient rendering methods for vanilla, stamp, and airbrush strokes that integrate the expressiveness of raster-based textures with the ease of real-time editing. Based on our stroke representation, we implement an open-source prototype drawing system with a vector fill feature, demonstrating that our techniques can enhance the expressiveness, efficiency, and edibility of digital drawing. Our work can serve as a foundation for future research on vector-based and GPU-accelerated rendering techniques in industrial-level brush engines.},
booktitle = {ACM SIGGRAPH 2024 Conference Papers},
articleno = {3},
numpages = {11},
keywords = {brush stroke rendering, digital painting, vector graphics},
location = {Denver, CO, USA},
series = {SIGGRAPH '24}
}
`
const bibJSON = BibtexParser.parseToJSON(bibData);

const PublicationList = (): JSX.Element => {
    return (
        <section className="grid w-full" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Publications</h2>
            <div>
                <PublicationItem title={bibJSON[0].title!} url={bibJSON[0].url!} conference={bibJSON[0].booktitle!}/>
            </div>
        </section>
    );
};

export default PublicationList;
