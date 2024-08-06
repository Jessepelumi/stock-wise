export default function AddPantry() {
    return (
      <form className="flex flex-col gap-4 font-spaceGrotesk">
        <div className="flex flex-col">
          <label htmlFor="itemName" className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            className="px-3 py-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit bg-gray-200 lg:dark:bg-zinc-800/30 focus:outline-none focus:ring focus:ring-slate-800"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="itemQuantity" className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Quantity
          </label>
          <input
            type="text"
            id="itemQuantity"
            name="itemQuantity"
            className="px-3 py-2 border rounded-xl border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit bg-gray-200 lg:dark:bg-zinc-800/30 focus:outline-none focus:ring focus:ring-slate-800"
          />
        </div>
        <button
          type="submit"
          className="mt-3 px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
        >
          Add Item
        </button>
      </form>
    );
  }
  