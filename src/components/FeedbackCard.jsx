import { quotes } from "../assets"

const FeedbackCard = ({content, name, title, img}) => (
    <div className="flex flex-col justify-between py-12 px-10 feedback-card rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5">
            <img src={quotes} alt="quoteimage" className="w-[42px] h-[27px] object-contain" />
            <p className="text-white font-poppins font-normal text-[18px] my-10">{content}</p>
        <div className="flex flex-row">
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
                <h4 className="text-white font-poppins font-semibold text-[20px] leading-[32px]">{name}</h4>
                <p className="text-dimWhite text-[16px] font-poppins font-normal">{title}</p>
            </div>
        </div>
    </div>
)

export default FeedbackCard