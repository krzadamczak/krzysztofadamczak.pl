import Image from "next/image";
import css from "../../styles/Card.module.css";
const Card = () => {
    return (
        <article className={css.card}>
            {/* <img src='' alt='' className='card__thumbnail' /> */}
            <div className={css.card__thumbnail}></div>
            <div className={css.card__title}>Czekamna.pl</div>
            <div className={css.card__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae provident recusandae magni,
                voluptate, explicabo quasi quam voluptas inventore dignissimos similique, enim dolor ipsam est aliquam
                quod tempora repudiandae illum?
            </div>
            <div className={css.card__tags}>
                <div className={css.card__tag}>Java Script</div>
                <div className={css.card__tag}>Express</div>
            </div>
            <div className={css.card__links}>
                <a href='' className={css.card__link}>
                    <Image src='/github.svg' width={25} height={25} alt='GitHub logo' />
                    GitHub
                </a>
                <a href='' className={css.card__link}>
                    <Image src='/external-link.svg' width={25} height={25} alt='External link' />
                    Live
                </a>
            </div>
        </article>
    );
};

export default Card;
