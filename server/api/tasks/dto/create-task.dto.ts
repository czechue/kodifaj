export class CreateTaskDto {
  readonly content?: string;
  readonly images?: string[];
  readonly tips?: string[];
  readonly title?: string;
  readonly tags?: string[];
  readonly reviewCount?: number;
  readonly _user?: string;
}
