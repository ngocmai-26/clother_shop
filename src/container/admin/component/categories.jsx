export const Categories = ({ category }) => {
  let isParent = category.isPrimary == true;
  return (
    <>
      {isParent && (
        <div
          class={`group/${category.id} block w-full lg:w-auto relative`}
          style={{ minWidth: "250px" }}
        >
          <button class="bg-white py-2 px-4 lg:px-4 inline-flex items-center w-full hover:bg-gray-100">
            <span class="mr-1">{category.name}</span>
          </button>
          <ul
            class={`absolute hidden text-gray-700 pt-1 group-hover/${category.id}:block z-10 w-full`}
            style={{ minWidth: "250px" }}
          >
            {category.categories.map((val) => {
              return (
                <li>
                  <a className="bg-white py-2">{val.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};
