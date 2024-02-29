import Image from "next/image";
interface SubmenuItem {
  title: string;
  subtitle: string;
  href: string;
}
const Submenu = ({
  arrayOfSubmenu,
}: {
  arrayOfSubmenu: Array<SubmenuItem>;
}) => {
  if (arrayOfSubmenu.length > 0)
    return (
      <ul
        className={`w-fit lg:absolute z-10 h-fit lg:shadow-2xl lg:left-0 top-[100px] lg:py-2.5 lg:p-2.5 lg:rounded lg:bg-slate-50 ml-10 lg:ml-0`}
      >
        {arrayOfSubmenu.map((el, i) => {
          return (
            <li
              key={i}
              className="w-full whitespace-nowrap py-1 hover:bg-green-100 hover:bg-opacity-70 px-1.5 rounded"
            >
              <a href={el.href}>
                <h3 className="text-base font-semibold text-green-600">
                  {el.title}
                </h3>
                <span className="text-slate-950 text-sm">{el.subtitle}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
};

export default Submenu;
