import { Link } from '@mui/material';
export const TopMenu: React.FunctionComponent<any> = () => {
  return (
    <>
      <Link href="/platform/profile" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Profile
      </Link>
      <Link href="/platform/games" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Games
      </Link>
    </>
  );
}
