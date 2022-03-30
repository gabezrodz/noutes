import NoteList from "../components/notes/NoteList";

const Notes = [
  {
    id: "n1",
    author: "Gabez",
    text: "Wow, laranxinea!",
  },
  { id: "n2", author: "Karloz", text: "Here comes Tata heheheh 🤏" },
];

const AllNotes = () => {
  return <NoteList notes={Notes}/>
};

export default AllNotes;
