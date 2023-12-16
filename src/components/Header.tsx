import Button from "./Button";
import Icon from "./Icon";

export default function Header() {
  return (
    <div className="bg-fuchsia-200 h-24 flex flex-row justify-between items-center">
      <Button
        startIcon={
          <Icon
            name="sync_alt"
            className="material-symbols-outlined rotate-90"
          />
        }
        className="w-[44px] h-[44px] rounded-full flex  bg-fieldOrange"
      />
      <Button
        startIcon={
          <Icon
            name="sync_alt"
            className="material-symbols-outlined rotate-90"
          />
        }
        className="w-[44px] h-[44px] rounded-full flex justify-center bg-fieldOrange"
      />
    </div>
  );
}
