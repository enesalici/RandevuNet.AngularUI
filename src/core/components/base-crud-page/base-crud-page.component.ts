import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CancelButtonComponent } from "../shared/widgets/buttons/cancel-button/cancel-button.component";
import { SubmitButtonComponent } from "../shared/widgets/buttons/submit-button/submit-button.component";
import { EditButtonComponent } from "../shared/widgets/buttons/edit-button/edit-button.component";
import { DeleteButtonComponent } from "../shared/widgets/buttons/delete-button/delete-button.component";
import { CreateButtonComponent } from "../shared/widgets/buttons/create-button/create-button.component";
import { StandardInputComponent } from "../shared/widgets/inputs/standard-input/standard-input.component";
import { BaseFormGroup, ColumnOption, IBaseFormModel, IBaseModel } from '../../models/base.model';
import { WritableService } from '../../services/writable.service';
import { ReadableService } from '../../services/readable.service';
import { SwalService } from '../../../app/services/swal.service';


@Component({
  selector: 'app-base-crud-page',
  standalone: true,
  imports: [ReactiveFormsModule, CancelButtonComponent, SubmitButtonComponent, EditButtonComponent, DeleteButtonComponent, CreateButtonComponent, StandardInputComponent],
  templateUrl: './base-crud-page.component.html',
  styleUrl: './base-crud-page.component.scss',
})
export class BaseCrudPageComponent implements OnInit {
  @Input({ required: true }) displayedColumns?: ColumnOption[]
  @Input({ required: true }) formControls?: IBaseFormModel

  @Input({ required: true }) writableService?: WritableService<IBaseModel>
  @Input({ required: true }) readableService?: ReadableService<IBaseModel>

  @Output() editingData: EventEmitter<IBaseModel> = new EventEmitter<IBaseModel>();

  dataSource: IBaseModel[] = []
  formGroup!: BaseFormGroup<IBaseFormModel>
  isShowFormSection: boolean = false
  isShowFormCreate: boolean = true;
  formSubmitted: boolean = false;

  constructor(private swal: SwalService) { }

  ngOnInit(): void {
    this.formGroup = new BaseFormGroup(this.formControls ?? {})
    this.getList()
  }

  getList() {
    this.readableService?.getList().subscribe((res) => {
      this.dataSource = res.items ?? []
    });
  }

  add() {
    console.log(this.formGroup.value);

    this.writableService?.add(this.formGroup.value).subscribe((res) => {
      this.getList();
      this.swal.callToast("Ekleme Başarılı")
      this.closeFormSection();
    })
  }

  update() {
    this.writableService?.update(this.formGroup.value).subscribe((res) => {
      this.getList();
       this.swal.callToast("Güncelleme Başarılı")
      this.closeFormSection();
      })
  }

  delete(id: any) {
    this.writableService?.delete(id).subscribe((res) => { this.getList(); this.swal.callToast("Silme Başarılı") })
  }



  submitButtonText: string = "Kaydet"
  submitButtonClicked() {
    this.formSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    if (this.submitButtonText == "Kaydet") this.add()
    if (this.submitButtonText == "Güncelle") this.update();


  }

  editButtonClicked(id: any, index?: number) {
    const data = this.dataSource.filter(ds => ds.id == id)[0]

    this.showFormEdit();
    this.editingData?.emit(data)
  }

  deleteButtonClicked(id: any, index?: number) {
    this.swal.callSwalDelete("", "Kaydı silmek istediğinizden emin misiniz ?", () => this.delete(id))
  }


  createButtonText: string = "Oluştur"
  createButtonClicked() {
    this.showFormCreate();
  }

  cancelButtonText: string = "İptal"
  cancelButtonClicked() {
    this.closeFormSection();
  }


  searchInputPlaceholder: string = "Ara..."
  searchInputKeyup($event: KeyboardEvent) {
    throw new Error('Method not implemented.');
  }

  showFormSection() {
    this.isShowFormSection = true;
  }

  closeFormSection() {
    this.isShowFormSection = false;
    this.formGroup.reset()
  }

  showFormCreate() {
    this.showFormSection();
    this.isShowFormCreate = true;
    // this.isShowFormEdit = false;
    this.submitButtonText = "Kaydet";
  }

  showFormEdit() {
    this.showFormSection();
    this.isShowFormCreate = false;
    // this.isShowFormEdit = true;
    this.submitButtonText = "Güncelle";
  }
}


