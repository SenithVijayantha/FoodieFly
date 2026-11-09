import { useContext } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { icons } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const ProfileAvatar = () => {
  const { url, setIsAuthenticated } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const response = await axios.post(
        `${url}/api/user/signout`,
        {},
        { withCredentials: true }
      );
      if (response.data.success) {
        toast.success("Signed out");
        setIsAuthenticated(false);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data) {
        console.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" className="rounded-full" aria-label="Account menu" />}
      >
        <img src={icons.avatar} alt="" width={32} height={32} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onClick={() => navigate("/myorders")}>Your orders</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive" onClick={handleSignOut}>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileAvatar;
