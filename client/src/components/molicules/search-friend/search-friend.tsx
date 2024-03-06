import InputField from "../../atoms/input-field";
import { useState } from "react";
import UserService from "../../../services/user.service";

export const SearchFriend = () => {
  const [friend, setFriend] = useState("");

  const handleFriendInput = (value: string) => {
    setFriend(value);
  }

  const handleSearchFriend = async () => {
    
  }
  return (
    <div className="bg-red-400">
      <InputField
        placeholder="search for friend"
        type="text"
        oninput={handleFriendInput}
        value={friend}
      />
      <button className="bg-green-600 text-white" onClick={handleSearchFriend}>search</button>
    </div>
  )
}
