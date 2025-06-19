export default function Hijo ({count}){

    if (count > 10 && count < 20) return ( <span style= {{
        color: "orange"
    }}
    >
        count: {count}
        </span>
    );

    if (count > 20)
    return (
<p style= {{
        color: "red"
    }}
    >
        count: {count}
        <span>Te pasaste</span>
        </p>
    );

    return <p>count: {count}</p>;
}
