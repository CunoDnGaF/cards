import Card from './Card';

const SpecialCard = function({title, text, src}) {
    return (
        <Card title={title} text={text}>
            <img className="card-img" src={src} alt="" />
        </Card>
    )
}

export default SpecialCard;