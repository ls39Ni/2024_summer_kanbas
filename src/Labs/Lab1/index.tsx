import AnchorExercise from "./AnchorExercise";
import HeadingExercise from "./HeadingTagExercise";
import ParagraphExercise from "./ParagraphExercise";
import FormExercise from "./FormExercise";
import ListsExercise from "./ListsExercise";
import TableExercise from "./TableExercise";
import ImageExerice from "./ImageTagExercise";

export default function Lab1() {
  return (
    <div>
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        <h3>HTML Examples</h3>
        <HeadingExercise />
        <ParagraphExercise />
        <ListsExercise />
        <TableExercise />
        <ImageExerice />
        <FormExercise />
        <AnchorExercise />
      </div>
    </div>
  );
}
