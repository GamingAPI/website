import { Link } from '@mui/material';
export const TopMenu: React.FunctionComponent<any> = () => {
  return (
    <>
      <Link href="/backend" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Backend
      </Link>
      <Link href="/backend/games" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Games
      </Link>
      <Link href="/platform/login" style={{margin: "0 10px 0 10px"}} variant="h6" color={"#282a36"}>
      Platform
      </Link>
    </>
  );
}
