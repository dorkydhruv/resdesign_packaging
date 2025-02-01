import AppBar from "@/components/AppBar";
import DashBoardForm from "@/components/DashBoardForm";
import GenerateDesign from "@/components/GenearateDesign";
import SideBar from "@/components/SideBar";
export default function Dashboard() {
  return (
    <div className='flex flex-col min-h-screen h-full font-normal'>
      <AppBar />
      <div className='flex flex-row justify-start'>
        <SideBar />
        <DashBoardForm />
        <GenerateDesign />
      </div>
    </div>
  );
}
