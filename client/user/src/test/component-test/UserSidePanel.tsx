import { Box, Drawer } from "@mui/material";
import { FC, memo } from "react";

interface IUser {
  user: { name?: string; sname?: string; age?: number | string };
  open?: boolean;
  onClose: () => void;
}

const UserSidePanel: FC<IUser> = ({ user, open, onClose }) => {
  console.log("Rerender Child ");
  const { name, sname, age } = user ?? {};
  return (
    <>
      <div style={{ background: "red" }}>
        <Drawer open={open} onClose={onClose}>
          <Box sx={{ minWidth: 300 }}>
            {" "}
            <i>Test User Info</i>
            <h1> {name && name}</h1>
            <h1> {sname && sname}</h1>
            <h1> {age && age}</h1>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default memo(UserSidePanel);
