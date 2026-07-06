namespace Axivon.Application.Interfaces;

public interface IStorageService
{
    Task<string> UploadFileAsync(string folderName, Stream fileStream, string fileName);
}
