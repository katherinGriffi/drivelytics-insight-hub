export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      google_tokens: {
        Row: {
          access_token_last_refreshed_at: string | null
          created_at: string | null
          google_user_id: string
          id: string
          refresh_token: string
          scopes_granted: string[] | null
        }
        Insert: {
          access_token_last_refreshed_at?: string | null
          created_at?: string | null
          google_user_id: string
          id?: string
          refresh_token: string
          scopes_granted?: string[] | null
        }
        Update: {
          access_token_last_refreshed_at?: string | null
          created_at?: string | null
          google_user_id?: string
          id?: string
          refresh_token?: string
          scopes_granted?: string[] | null
        }
        Relationships: []
      }
      historial_clinico: {
        Row: {
          categoria_servico: string | null
          created_at: string
          diagnostico: string | null
          doctor_id: string | null
          examen_intrabucal: string | null
          fecha_consulta: string | null
          id: string
          motivo_consulta: string | null
          observaciones: string | null
          odontograma_id: string | null
          paciente_id: string
          plan_tratamento: string | null
          plan_tratamiento: string | null
          proxima_cita_sugerida: string | null
          radiografia_urls: string[] | null
          recordatorios_especiales: string | null
          tratamiento_realizado: string | null
        }
        Insert: {
          categoria_servico?: string | null
          created_at?: string
          diagnostico?: string | null
          doctor_id?: string | null
          examen_intrabucal?: string | null
          fecha_consulta?: string | null
          id?: string
          motivo_consulta?: string | null
          observaciones?: string | null
          odontograma_id?: string | null
          paciente_id: string
          plan_tratamento?: string | null
          plan_tratamiento?: string | null
          proxima_cita_sugerida?: string | null
          radiografia_urls?: string[] | null
          recordatorios_especiales?: string | null
          tratamiento_realizado?: string | null
        }
        Update: {
          categoria_servico?: string | null
          created_at?: string
          diagnostico?: string | null
          doctor_id?: string | null
          examen_intrabucal?: string | null
          fecha_consulta?: string | null
          id?: string
          motivo_consulta?: string | null
          observaciones?: string | null
          odontograma_id?: string | null
          paciente_id?: string
          plan_tratamento?: string | null
          plan_tratamiento?: string | null
          proxima_cita_sugerida?: string | null
          radiografia_urls?: string[] | null
          recordatorios_especiales?: string | null
          tratamiento_realizado?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_categoria_servico"
            columns: ["categoria_servico"]
            isOneToOne: false
            referencedRelation: "servicios_dentales"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_odontograma"
            columns: ["odontograma_id"]
            isOneToOne: false
            referencedRelation: "pacientes_odontogramas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historial_clinico_doctor_id_fkey"
            columns: ["doctor_id"]
            isOneToOne: false
            referencedRelation: "medicos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "historial_clinico_paciente_id_fkey"
            columns: ["paciente_id"]
            isOneToOne: false
            referencedRelation: "pacientes"
            referencedColumns: ["id"]
          },
        ]
      }
      medicos: {
        Row: {
          activo: boolean | null
          correo: string | null
          created_at: string | null
          especialidad: string | null
          fecha_ingreso: string
          id: string
          nombre: string
          porcentaje_comision: number | null
          telefono: string | null
        }
        Insert: {
          activo?: boolean | null
          correo?: string | null
          created_at?: string | null
          especialidad?: string | null
          fecha_ingreso: string
          id?: string
          nombre: string
          porcentaje_comision?: number | null
          telefono?: string | null
        }
        Update: {
          activo?: boolean | null
          correo?: string | null
          created_at?: string | null
          especialidad?: string | null
          fecha_ingreso?: string
          id?: string
          nombre?: string
          porcentaje_comision?: number | null
          telefono?: string | null
        }
        Relationships: []
      }
      paciente_radiografias: {
        Row: {
          created_at: string | null
          fecha_radiografia: string | null
          fecha_subida: string | null
          file_name: string | null
          id: string
          observaciones: string | null
          paciente_id: string
          url: string
        }
        Insert: {
          created_at?: string | null
          fecha_radiografia?: string | null
          fecha_subida?: string | null
          file_name?: string | null
          id?: string
          observaciones?: string | null
          paciente_id: string
          url: string
        }
        Update: {
          created_at?: string | null
          fecha_radiografia?: string | null
          fecha_subida?: string | null
          file_name?: string | null
          id?: string
          observaciones?: string | null
          paciente_id?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "paciente_radiografias_paciente_id_fkey"
            columns: ["paciente_id"]
            isOneToOne: false
            referencedRelation: "pacientes"
            referencedColumns: ["id"]
          },
        ]
      }
      pacientes: {
        Row: {
          activo: boolean | null
          alergias: string | null
          apellido_materno: string | null
          apellido_paterno: string
          celular: string | null
          ciudad: string | null
          correo: string | null
          direccion: string | null
          distrito: string | null
          dni: string
          enfermedades_cronicas: string | null
          estado_civil: string | null
          fecha_nacimiento: string | null
          fecha_registro: string | null
          grupo_sanguineo: string | null
          historial_dental: string | null
          id: string
          medicamentos_actuales: string | null
          nombres: string
          ocupacion: string | null
          referencia: string | null
          seguro_medico: string | null
          sexo: string | null
          telefono_fijo: string | null
          ultima_visita: string | null
        }
        Insert: {
          activo?: boolean | null
          alergias?: string | null
          apellido_materno?: string | null
          apellido_paterno: string
          celular?: string | null
          ciudad?: string | null
          correo?: string | null
          direccion?: string | null
          distrito?: string | null
          dni: string
          enfermedades_cronicas?: string | null
          estado_civil?: string | null
          fecha_nacimiento?: string | null
          fecha_registro?: string | null
          grupo_sanguineo?: string | null
          historial_dental?: string | null
          id?: string
          medicamentos_actuales?: string | null
          nombres: string
          ocupacion?: string | null
          referencia?: string | null
          seguro_medico?: string | null
          sexo?: string | null
          telefono_fijo?: string | null
          ultima_visita?: string | null
        }
        Update: {
          activo?: boolean | null
          alergias?: string | null
          apellido_materno?: string | null
          apellido_paterno?: string
          celular?: string | null
          ciudad?: string | null
          correo?: string | null
          direccion?: string | null
          distrito?: string | null
          dni?: string
          enfermedades_cronicas?: string | null
          estado_civil?: string | null
          fecha_nacimiento?: string | null
          fecha_registro?: string | null
          grupo_sanguineo?: string | null
          historial_dental?: string | null
          id?: string
          medicamentos_actuales?: string | null
          nombres?: string
          ocupacion?: string | null
          referencia?: string | null
          seguro_medico?: string | null
          sexo?: string | null
          telefono_fijo?: string | null
          ultima_visita?: string | null
        }
        Relationships: []
      }
      pacientes_odontogramas: {
        Row: {
          created_at: string
          id: string
          notes: string | null
          odontogram_data: Json
          patient_id: string
          record_date: string
        }
        Insert: {
          created_at?: string
          id?: string
          notes?: string | null
          odontogram_data?: Json
          patient_id: string
          record_date?: string
        }
        Update: {
          created_at?: string
          id?: string
          notes?: string | null
          odontogram_data?: Json
          patient_id?: string
          record_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_patient"
            columns: ["patient_id"]
            isOneToOne: false
            referencedRelation: "pacientes"
            referencedColumns: ["id"]
          },
        ]
      }
      registros_caja: {
        Row: {
          created_at: string | null
          descripcion: string
          fecha: string
          forma_pago: string | null
          id: string
          medico_id: string | null
          moneda: Database["public"]["Enums"]["Moneda"] | null
          numero_factura: string | null
          paciente_id: string | null
          tipo_movimiento_id: number
          user_id: string
          valor: number
        }
        Insert: {
          created_at?: string | null
          descripcion: string
          fecha?: string
          forma_pago?: string | null
          id?: string
          medico_id?: string | null
          moneda?: Database["public"]["Enums"]["Moneda"] | null
          numero_factura?: string | null
          paciente_id?: string | null
          tipo_movimiento_id: number
          user_id: string
          valor: number
        }
        Update: {
          created_at?: string | null
          descripcion?: string
          fecha?: string
          forma_pago?: string | null
          id?: string
          medico_id?: string | null
          moneda?: Database["public"]["Enums"]["Moneda"] | null
          numero_factura?: string | null
          paciente_id?: string | null
          tipo_movimiento_id?: number
          user_id?: string
          valor?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_registros_caja_medico"
            columns: ["medico_id"]
            isOneToOne: false
            referencedRelation: "medicos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_caja_paciente_id_fkey"
            columns: ["paciente_id"]
            isOneToOne: false
            referencedRelation: "pacientes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_caja_tipo_movimiento_id_fkey"
            columns: ["tipo_movimiento_id"]
            isOneToOne: false
            referencedRelation: "tipos_movimiento"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "registros_caja_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      servicios_dentales: {
        Row: {
          created_at: string | null
          descripcion: string | null
          id: string
          nombre_categoria: string
          nombre_servicio: string
          precio_max_pen: number | null
          precio_medio_pen: number | null
          precio_min_pen: number | null
        }
        Insert: {
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre_categoria: string
          nombre_servicio: string
          precio_max_pen?: number | null
          precio_medio_pen?: number | null
          precio_min_pen?: number | null
        }
        Update: {
          created_at?: string | null
          descripcion?: string | null
          id?: string
          nombre_categoria?: string
          nombre_servicio?: string
          precio_max_pen?: number | null
          precio_medio_pen?: number | null
          precio_min_pen?: number | null
        }
        Relationships: []
      }
      tipos_movimiento: {
        Row: {
          activo: boolean | null
          created_at: string | null
          id: number
          nombre: string
          tipo: Database["public"]["Enums"]["tipo_movimiento"] | null
        }
        Insert: {
          activo?: boolean | null
          created_at?: string | null
          id?: number
          nombre: string
          tipo?: Database["public"]["Enums"]["tipo_movimiento"] | null
        }
        Update: {
          activo?: boolean | null
          created_at?: string | null
          id?: number
          nombre?: string
          tipo?: Database["public"]["Enums"]["tipo_movimiento"] | null
        }
        Relationships: []
      }
      users: {
        Row: {
          activo: boolean | null
          apellido: string | null
          email: string
          id: string
          nombre: string | null
          role: string | null
        }
        Insert: {
          activo?: boolean | null
          apellido?: string | null
          email: string
          id?: string
          nombre?: string | null
          role?: string | null
        }
        Update: {
          activo?: boolean | null
          apellido?: string | null
          email?: string
          id?: string
          nombre?: string | null
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ciudad:
        | "Chachapoyas"
        | "Huaraz"
        | "Abancay"
        | "Arequipa"
        | "Ayacucho"
        | "Cajamarca"
        | "Callao"
        | "Cusco"
        | "Huancavelica"
        | "Huánuco"
        | "Ica"
        | "Huancayo"
        | "Trujillo"
        | "Chiclayo"
        | "Huacho"
        | "Lima"
        | "Iquitos"
        | "Puerto Maldonado"
        | "Moquegua"
        | "Cerro de Pasco"
        | "Piura"
        | "Puno"
        | "Moyobamba"
        | "Tacna"
        | "Tumbes"
        | "Pucallpa"
      Moneda: "USD" | "SOLES"
      tipo_movimiento: "Ingreso" | "Egreso" | "Ajuste"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      ciudad: [
        "Chachapoyas",
        "Huaraz",
        "Abancay",
        "Arequipa",
        "Ayacucho",
        "Cajamarca",
        "Callao",
        "Cusco",
        "Huancavelica",
        "Huánuco",
        "Ica",
        "Huancayo",
        "Trujillo",
        "Chiclayo",
        "Huacho",
        "Lima",
        "Iquitos",
        "Puerto Maldonado",
        "Moquegua",
        "Cerro de Pasco",
        "Piura",
        "Puno",
        "Moyobamba",
        "Tacna",
        "Tumbes",
        "Pucallpa",
      ],
      Moneda: ["USD", "SOLES"],
      tipo_movimiento: ["Ingreso", "Egreso", "Ajuste"],
    },
  },
} as const
