import { Link } from 'umi';
interface Props {
    icon: string;
    to: string;
    text: string;
}
export default function NavItem({icon, to, text}: Props) {
    return (
        <Link to={to}>
            <div className="flex items-center w-fit px-2 py-2 mx-3 xl:ml-0 xl:mr-5 xl:px-5 xl:w-auto gap-4">
                <div className={'icon '+ icon}></div>
                <span>{text}</span>
            </div>
        </Link>
    )
}