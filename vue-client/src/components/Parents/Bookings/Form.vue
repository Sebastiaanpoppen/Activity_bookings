<template>
  <div class="col-8">
    <div class="card">
      <div class="card-header">
        {{formTitle}}
      </div>
      <div class="card-block pos-r">
        <yc-form
          :item="employment_request"
          :fields="fields">
        </yc-form>
      </div>
    </div>
  </div>
</template>

<script>
  import YcForm from './../shared/YcForm/YcForm';
  import Unit from './../../classes/Unit';
  import User from './../../classes/User';

  export default {
    name: 'employment-requests-form',
    data() {
      return {
        fields: [
          { title: 'Voornaam',
            attribute: 'firstname',
            validator: 'isRequired',
          },
          { title: 'Achternaam',
            attribute: 'lastname',
            validator: 'isRequired',
          },
          { title: 'Geboortedatum',
            attribute: 'dob',
            type: 'date',
            validator: 'isRequired',
          },
          { title: 'Geslacht',
            attribute: 'is_male',
            type: 'radio',
            options: [
              { title: 'Man', value: true },
              { title: 'Vrouw', value: false },
            ] },
          { title: 'Privé e-mail',
            attribute: 'private_email',
            validator: 'isRequired',
          },
          { title: 'Privé telefoonnummer', attribute: 'telephone' },
          { title: 'Privé mobiel', attribute: 'mobile' },
          { title: 'Hoofdunit',
            attribute: 'primary_unit',
            type: 'hasOne',
            for: Unit,
            showDirect: true,
            send_to: 'primary_unit_id',
            validator: 'isRequired',
          },
          { title: 'Functietitel/Rol',
            attribute: 'function_title',
            validator: 'isRequired',
            info: 'Vul hier de functietitel/rol van deze medewerker in',
          },
          { title: 'Manager',
            attribute: 'manager',
            type: 'hasOne',
            for: User,
            send_to: 'manager_id',
            customLabel: user => `${user.firstname} ${user.lastname}`,
            activeFilter: { is_active: true },
            validator: 'isRequired',
          },
          { title: 'Datum in dienst',
            attribute: 'start_date',
            type: 'date',
            activeFilter: {
              to: (new Date(new Date().setDate(new Date().getDate() - 31))),
            },
            validator: 'isRequired',
          },
          {
            title: 'Locatie werkplek',
            attribute: 'workplace_location',
            info: 'Geef zo kort en duidelijk mogelijk weer waar de plaats ingericht moet worden',
          },
          {
            title: 'Werk e-mail',
            attribute: 'email',
          },
          {
            title: 'Nodig voor realisatie:',
            type: 'label',
          },
          {
            title: 'Bureau',
            listitem: true,
            attribute: 'inventory_desk',
            type: 'boolean_checkbox',
          },
          {
            title: 'Bureaustoel',
            listitem: true,
            attribute: 'inventory_chair',
            type: 'boolean_checkbox',
          },
          {
            title: 'Computer',
            listitem: true,
            attribute: 'inventory_computer',
            type: 'boolean_checkbox',
          },
          {
            title: 'Laptop',
            listitem: true,
            attribute: 'inventory_laptop',
            type: 'boolean_checkbox',
          },
          {
            title: 'Mobiele telefoon',
            listitem: true,
            attribute: 'inventory_mobile',
            type: 'boolean_checkbox',
          },
          {
            title: 'Vaste telefoon',
            listitem: true,
            attribute: 'inventory_telephone',
            type: 'boolean_checkbox',
          },
          {
            title: 'Vaste telefoon is al aanwezig',
            listitem: true,
            attribute: 'inventory_telephone_present',
            type: 'boolean_checkbox',
          },
          {
            title: 'Nummer vaste telefoon',
            listitem: true,
            attribute: 'inventory_telephone_note',
          },
          {
            title: 'Rechten:',
            type: 'label',
          },
          {
            title: 'Toegang tot h schijf',
            listitem: true,
            attribute: 'h_access',
            type: 'boolean_checkbox',
          },
          {
            title: 'Toegang tot i schijf',
            listitem: true,
            attribute: 'i_access',
            type: 'boolean_checkbox',
          },
          {
            title: 'Toegang tot z schijf',
            listitem: true,
            attribute: 'z_access',
            type: 'boolean_checkbox',
          },
          {
            title: 'Toegang tot specifieke overige mappen',
            listitem: true,
            attribute: 'directory_access',
          },
          {
            title: 'Planmanager pools',
            listitem: true,
            attribute: 'planmanager_pools',
            info: 'Nur für deutschland',
          },
          { title: 'Opmerking', attribute: 'remark', type: 'textarea' },
        ],
      };
    },
    props: {
      formTitle: String,
      employment_request: {
        type: Object,
        default() {
          return {};
        },
      },
      formType: {
        type: String,
        default: '',
      },
    },
    components: {
      YcForm,
    },
  };
</script>
