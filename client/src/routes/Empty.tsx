import { useLocalize } from "~/hooks";

export default function Empty() {
  const localize = useLocalize();
    
  return (
    <div className="flex h-full dark:text-white items-center text-black justify-center w-full gap-20 p-4">
      <div className="flex max-w-[44%] justify-center px-4 flex-col">
        <img className="max-w-[50%]" src="/assets/logo_big.svg" alt="" />
        <h1 className="text-4xl">{localize('mock_title')}</h1>
        <p className="pt-2 text-md max-w-[600px]">
            {localize('mock_desc')} <br />
            {localize('mock_subdesc')}
        </p>
        <h2 className="pt-2 text-3xl">{localize('mock_title2')}</h2>
        <p className="text-lg">{localize('mock_desc2')}</p>
        <ul className="!list-disc list-inside">
            <li>
                {localize('mock_li')}
            </li>
            <li>
                {localize('mock_li2')}
            </li>
            <li>
                {localize('mock_li3')}
            </li>
        </ul>
      </div>
      <div>
          <iframe
            src="https://nowpayments.io/embeds/donation-widget?api_key=91229530-3cf1-4f04-9ad3-1c9a9bd6a60d"
            width="346"
            height="623"
            frameBorder="0"
            scrolling="no"
            style={{ overflowY: 'hidden' }}
          >
            Can't load widget
          </iframe>
      </div>
    </div>
  );
}
