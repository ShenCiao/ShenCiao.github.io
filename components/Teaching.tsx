import data from './data/teaching.json'
import ExtLink from "./ExtLink";

const Teaching = (): JSX.Element => {
    return (
        <section className="grid" id="teaching">
            <h2 className="text-xl font-bold mt-12 mb-4">Work In Process</h2>
            <div className="text-base ml-4 text-gray-700">
              <ul className="list-disc">
                <li>Proportional Interval Stamp Brush: <ExtLink
                  href={"https://shenciao.github.io/brush-rendering-tutorial/Proportional-Interval-Stamp/"}>Tutorial</ExtLink>
                </li>
                <li>Approximate Airbrush with Fall-Off Curve</li>
                <li>Modeling Hand-drawn Strokes with Minkowski Sum</li>
              </ul>
            </div>

        </section>
    );
};



export default Teaching;
