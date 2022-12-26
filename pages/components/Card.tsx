import { nanoid } from "nanoid";
import Image from "next/image";
import css from "../../styles/Card.module.css";
const Card = (props: any) => {
    console.log(props);
    return (
        <article className={css.card}>
            {/* <img src={props.thumbnail} alt='test' className={css.card__thumbnail} /> */}
            <div className={css.card__thumbnail}>
                <Image src={props.thumbnail} alt='test' fill={true} style={{ objectFit: "cover" }} quality={100} />
            </div>
            <div className={css.card__wrapper}>
                <div className={css.card__title}>{props.title}</div>
                <div className={css.card__description}>{props.description}</div>
                <div className={css.card__tags}>
                    {props.tags.map((tag: string) => (
                        <div key={nanoid()} className={css.card__tag}>
                            {tag}
                        </div>
                    ))}
                </div>
                <div className={css.card__links}>
                    <a href={props.githubUrl} className={css.card__link}>
                        <Image src='/github.svg' width={25} height={25} alt='GitHub logo' />
                        GitHub
                    </a>
                    <a href={props.liveUrl} className={css.card__link}>
                        <Image src='/external-link.svg' width={25} height={25} alt='External link' />
                        Live
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Card;
