export class CreateTaskBodyDto {
  readonly content?: string;
  readonly images?: string[];
  readonly tips?: string[];
  readonly title?: string;
  readonly tags?: string[];
}
