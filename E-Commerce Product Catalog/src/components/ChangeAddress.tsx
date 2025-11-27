import { useState } from "react";

type ChangeAddressProps = {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChangeAddress: React.FC<ChangeAddressProps> = ({
  setAddress,
  setIsModalOpen,
}) => {
  const [newAddress, setNewAddress] = useState("");

  const handleSave = () => {
    setAddress(newAddress); // update the address in parent
    setIsModalOpen(false); // close the modal
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your address"
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleSave} // use onClick, not onCanPlay
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
