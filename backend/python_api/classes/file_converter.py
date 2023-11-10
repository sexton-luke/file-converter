from PIL import Image

class FileConverter:
    def __init__(self):
        self.methods = {
            ("jpg", "png"): self.jpg_to_png,
            ("png", "jpg"): self.png_to_jpg,
        }
        
    def get_supported_formats(self):
        return self.methods.keys()

    def convert(self, from_format, to_format, input_path, output_path):
        key = (from_format, to_format)
        if key in self.methods:
            method = self.methods[key]
            return method(input_path, output_path)
        else:
            return False  # Conversion not supported

    def jpg_to_png(self, jpg_path, png_path):
        image = Image.open(jpg_path)
        image.save(png_path)
        return (True, "image/png")

    def png_to_jpg(self, png_path, jpg_path):
        image = Image.open(png_path)
        converted_image = image.convert("RGB") # Remove alpha channel
        converted_image.save(jpg_path)
        return (True, "image/jpeg")

