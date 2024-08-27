import { MyProjectContentContainer } from "@public/style/Dashboard.styles";
import icons from "@public/images";

const sortItems = items => {
  return [...items].sort((a, b) => {
    if (a.type === "folder" && b.type !== "folder") return -1;
    if (a.type !== "folder" && b.type === "folder") return 1;
    return a.name.localeCompare(b.name);
  });
};

const updateFolderStructure = (
  folderStructure,
  targetFolder,
  updatedChildren
) => {
  const updatedFolderStructure = { ...folderStructure };
  const folderToUpdate = findMatchingFolder(
    updatedFolderStructure.children,
    targetFolder.name
  );
  if (folderToUpdate) {
    folderToUpdate.children = updatedChildren;
  }
  return updatedFolderStructure;
};

const findMatchingFolder = (children, name) => {
  for (const item of children) {
    if (item.name === name) return item;
    if (item.children) {
      const foundFolder = findMatchingFolder(item.children, name);
      if (foundFolder) return foundFolder;
    }
  }
  return null;
};

const ItemList = ({ items = [] }) => {
  const sortedItems = sortItems(items);

  return (
    <ul>
      {sortedItems.map(item => (
        <li key={item.path}>
          <img
            src={item.type === "folder" ? icons.folderLineIcon : icons.fileIcon}
            alt={item.type === "folder" ? "Folder Line Icon" : "File Icon"}
          />
          <span>{item.name}</span>

          {item.type === "folder" &&
            item.children &&
            item.children.length > 0 && <ItemList items={item.children} />}
        </li>
      ))}
    </ul>
  );
};

const MyProject = ({
  folderStructure = { children: [] },
  setFolderStructure
}) => {
  const targetFolder = findMatchingFolder(
    folderStructure.children,
    folderStructure.name
  );

  return (
    <MyProjectContentContainer>
      {targetFolder && targetFolder.children ? (
        <>
          <p>
            <img src={icons.folderLineIcon} alt="Folder Line Icon" />
            <span>{targetFolder.name}</span>
          </p>
          <ItemList
            items={targetFolder.children}
            setItems={updatedChildren => {
              const updatedStructure = updateFolderStructure(
                folderStructure,
                targetFolder,
                updatedChildren
              );
              setFolderStructure(updatedStructure);
            }}
          />
        </>
      ) : (
        <span>프로젝트가 없습니다.</span>
      )}
    </MyProjectContentContainer>
  );
};

export default MyProject;
