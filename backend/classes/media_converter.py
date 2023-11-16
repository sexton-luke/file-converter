from moviepy.editor import VideoFileClip
from pydub import AudioSegment
from PIL import Image

class MediaConverter:
    def __init__(self):
        self.methods = {
            ("jpg", "png"): self.jpg_to_png,
            ("png", "jpg"): self.png_to_jpg,
            ("mp3", "wav"): self.mp3_to_wav,
            ("wav", "mp3"): self.wav_to_mp3,
            ("mp4", "avi"): self.mp4_to_avi,
            ("avi", "mp4"): self.avi_to_mp4
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
    
    def mp3_to_wav(self, mp3_path, wav_path):
        sound = AudioSegment.from_mp3(mp3_path)
        sound.export(wav_path, format="wav")
        return (True, "audio/wav")
    
    def wav_to_mp3(self, wav_path, mp3_path):
        sound = AudioSegment.from_wav(wav_path)
        sound.export(mp3_path, format="mp3")
        return (True, "audio/mpeg")
    
    def mp4_to_avi(self, mp4_path, avi_path):
        print('mp4path', mp4_path)
        print('avipath', avi_path)

        video = VideoFileClip(mp4_path)
        video.write_videofile(avi_path, codec='libx264')
        video.close()
        return (True, "video/x-msvideo")
    
    def avi_to_mp4(self, avi_path, mp4_path):
        video = VideoFileClip(avi_path)
        video.write_videofile(mp4_path, codec='libx264')
        video.close()
        return (True, "video/mp4")
    

