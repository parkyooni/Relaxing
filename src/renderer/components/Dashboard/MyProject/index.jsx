import { useState } from "react";
import { MyProjectContentContainer } from "@public/style/Dashboard.styles";
import icons from "@public/images";
import mockData from "@utils/mockData.json";

const ItemList = ({ items, setItems }) => {
  const handleDelete = indexToDelete => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <img
            src={icons.closeIcon}
            alt="Close Icon"
            onClick={() => handleDelete(index)}
            style={{ cursor: "pointer" }}
          />
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
  const [folderStructure, setFolderStructure] = useState(
    mockData.folderStructure
  );

  return (
    <MyProjectContentContainer>
      <p>
        <img src={icons.folderLineIcon} alt="Folder Line Icon" />
        <span>{folderStructure.name}</span>
      </p>
      <ItemList
        items={folderStructure.children}
        setItems={updatedChildren =>
          setFolderStructure({ ...folderStructure, children: updatedChildren })
        }
      />
    </MyProjectContentContainer>
  );
};

export default MyProject;
