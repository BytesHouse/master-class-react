const MySecondComponent = (props) => {
    const obj = {key1: 2, key2: 3, title: "Heading 1 props"};
    return <div>
        <H1 arg1="Strings args" arg2={10} arg3={[1,2,3]} arg4={{key: 1}} {...obj} /> {/* foo(arg1, arg2, arg3, ...rest) */}

        <H2 title="Hello H2 Component"/>
        <H2 title="Hello H2 Component 2"/>
        <H2 title="Hello H2 Component 3"/>

        <H3/>
        <H4/>
        <H5/>
        <H6/>
    </div>
}
export default MySecondComponent;

// Props -> Properties -> Аргументы -> Обьект {key1: value1, key2: value2, keyN: valueN}

export const H1 = (props) => <h1>{props.title} {props.arg1} {props.arg2}</h1> // {title: undefined}
export const H2 = (props) => <h2>{props.title}</h2>
const H3 = (props) => <h3>Heading 3</h3>
const H4 = (props) => <h4>Heading 4</h4>
const H5 = (props) => <h5>Heading 5</h5>
const H6 = (props) => <h6>Heading 6</h6>

// N/B ->  PropsTypes       TypeScript