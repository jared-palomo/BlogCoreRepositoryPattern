using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogCore.Models
{
    public class Articulo
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "El nombre es obligatorio."),Display(Name = "Nombre del articulo")]
        public string Nombre { get; set; }

        [Required(ErrorMessage = "La Descripción es obligatoria."), Display(Name = "Descripción")]
        public string Descripcion { get; set; }

        [Display(Name = "Fecha de creación")]
        public string FechaCreacion { get; set; }

        [DataType(DataType.ImageUrl), Display(Name = "Imágen")]
        public string UrlImagen { get; set; }

        //Relaciones
        [Required]
        public int CategoriaId { get; set; }

        [ForeignKey("CategoriaId")]
        public Categoria Categoria { get; set; }
    }
}
