import AppListItem from "./coffeeListItem";

export default function AppList({ data, countOfItems }) {
   const elements = data.map((item, index) => {
      if (index < countOfItems) {
         const { ...itemProps } = item;

         return <AppListItem key={index} {...itemProps} />;
      }
   });

   return (
      <ul className="flex flex-wrap justify-between max-w-[700px] mr-auto ml-auto">
         {elements}
      </ul>
   );
}
