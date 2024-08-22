import { MyProjectContentContainer } from "@public/style/Dashboard.styles";
import icons from "@public/images";
import useDashboardStore from "@/store/dashboardStore";

const ItemList = ({ items = [], setItems }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <img
            src={item.type === "folder" ? icons.folderLineIcon : icons.fileIcon}
            alt={item.type === "folder" ? "Folder Line Icon" : "File Icon"}
          />
          <span>{item.name}</span>
          {item.type === "folder" &&
            item.children &&
            item.children.length > 0 && (
              <ItemList
                items={item.children}
                setItems={updatedChildren => {
                  const updatedItems = [...items];
                  updatedItems[index].children = updatedChildren;
                  setItems(updatedItems);
                }}
              />
            )}
        </li>
      ))}
    </ul>
  );
};

const MyProject = () => {
  const { folderStructure, setFolderStructure } = useDashboardStore(state => ({
    folderStructure: state.folderStructure,
    setFolderStructure: state.setFolderStructure
  }));

  return (
    <MyProjectContentContainer>
      {folderStructure ? (
        <>
          <p>
            <img src={icons.folderLineIcon} alt="Folder Line Icon" />
            <span>{folderStructure.name}</span>
          </p>
          <ItemList
            items={folderStructure.children}
            setItems={updatedChildren =>
              setFolderStructure({
                ...folderStructure,
                children: updatedChildren
              })
            }
          />
        </>
      ) : (
        <p>프로젝트가 없습니다.</p>
      )}
    </MyProjectContentContainer>
  );
};

export default MyProject;
