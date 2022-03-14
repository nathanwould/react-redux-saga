import { Statistic } from "semantic-ui-react";

export default function DisplayBalance({ title, size, value, color='black' }) {
    return (
        <Statistic 
            size={size}
        >
            <Statistic.Label style={{textAlign: 'left'}}>
                {title}
            </Statistic.Label>
            <Statistic.Label style={{color}}>
                ${value}
            </Statistic.Label>
        </Statistic>
    )
}